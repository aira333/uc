
import React, { useState } from 'react';
import { ChevronDown, X, CheckSquare, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroupProps {
  name: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  name,
  options,
  selectedOptions,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggleOption = (optionId: string) => {
    const newSelected = selectedOptions.includes(optionId)
      ? selectedOptions.filter(id => id !== optionId)
      : [...selectedOptions, optionId];
    
    onChange(newSelected);
  };

  const handleToggleAll = () => {
    if (selectedOptions.length === options.length) {
      onChange([]);
    } else {
      onChange(options.map(option => option.id));
    }
  };

  return (
    <div className="border-b border-border pb-3 mb-3">
      <div 
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-sm font-medium">{name}</h3>
        <ChevronDown 
          size={16} 
          className={cn(
            "transition-transform",
            isExpanded ? "transform rotate-180" : ""
          )}
        />
      </div>
      
      {isExpanded && (
        <div className="space-y-2 mt-2 text-sm">
          <button
            onClick={handleToggleAll}
            className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {selectedOptions.length === options.length ? (
              <>
                <Square size={14} className="mr-1.5" />
                Deselect All
              </>
            ) : (
              <>
                <CheckSquare size={14} className="mr-1.5" />
                Select All
              </>
            )}
          </button>
          
          <div className="space-y-1 pl-1 max-h-48 overflow-y-auto pb-1">
            {options.map((option) => (
              <div 
                key={option.id}
                className="flex items-center justify-between"
              >
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => handleToggleOption(option.id)}
                  />
                  <span className="mr-2">
                    {selectedOptions.includes(option.id) ? (
                      <CheckSquare size={14} className="text-primary" />
                    ) : (
                      <Square size={14} className="text-muted-foreground" />
                    )}
                  </span>
                  <span className={cn(
                    "text-sm transition-colors",
                    selectedOptions.includes(option.id)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}>
                    {option.label}
                  </span>
                </label>
                {option.count !== undefined && (
                  <span className="text-xs text-muted-foreground">{option.count}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface FilterPanelProps {
  filters: {
    name: string;
    id: string;
    options: FilterOption[];
  }[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (filterId: string, selectedOptions: string[]) => void;
  onClearAll: () => void;
  className?: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  onClearAll,
  className,
}) => {
  // Count total active filters
  const totalActiveFilters = Object.values(selectedFilters)
    .reduce((total, selected) => total + selected.length, 0);

  return (
    <aside className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Filters</h2>
        {totalActiveFilters > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <X size={14} className="mr-1" />
            Clear all
          </button>
        )}
      </div>
      
      <div>
        {filters.map((filter) => (
          <FilterGroup
            key={filter.id}
            name={filter.name}
            options={filter.options}
            selectedOptions={selectedFilters[filter.id] || []}
            onChange={(selectedOptions) => onFilterChange(filter.id, selectedOptions)}
          />
        ))}
      </div>
    </aside>
  );
};

export default FilterPanel;
