import React from "react";

interface InfoCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export default function InfoCard({ title, subtitle, description, icon, highlight = false }: InfoCardProps) {
  return (
    <div className={`p-6 rounded-xl border ${highlight ? 'border-[#D4A843] ring-1 ring-[#D4A843]' : 'border-gray-200'} bg-white shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className={`p-3 rounded-lg flex-shrink-0 ${highlight ? 'bg-[#D4A843]/10 text-[#D4A843]' : 'bg-[#0F2044]/5 text-[#0F2044]'}`}>
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-lg font-bold text-[#0F2044]">{title}</h3>
          {subtitle && (
            <p className="text-sm font-medium text-gray-500 mt-1">{subtitle}</p>
          )}
          {description && (
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
