import React from 'react';
import { 
  Building2, 
  Landmark, 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CategoryFilter: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useApp();

  const categories = [
    { id: 'all', label: 'All Services', icon: Layers },
    { id: 'government', label: '🏛️ Government & Identity', icon: Building2 },
    { id: 'banking', label: '🏦 Banking & Finance', icon: Landmark },
    { id: 'education', label: '🎓 Education & Scholarships', icon: GraduationCap },
    { id: 'employment', label: '💼 Employment & PF', icon: Briefcase },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isSelected = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
              isSelected
                ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/20'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};
