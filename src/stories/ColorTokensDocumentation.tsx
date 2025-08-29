import React from 'react';

interface ColorSwatchProps {
  name: string;
  value: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value }) => {
  const backgroundColor = value.startsWith('var(') ? `var(${value.slice(4, -1)})` : `hsl(${value})`;
  const textColor = (() => {
    const parts = value.split(' ');
    if (parts.length >= 3) {
      const lightness = parseFloat(parts[2]);
      return lightness > 50 ? '#000' : '#fff';
    }
    return '#000';
  })();

  return (
    <div className="flex items-center h-10 px-2 font-proxima" style={{ backgroundColor }}>
      <span className="font-mono text-xs" style={{ color: textColor }}>{name}</span>
    </div>
  );
};

interface ColorCategoryProps {
  name: string;
  prefix: string;
  isSystem?: boolean;
  systemTokens?: string[];
}

const ColorCategory: React.FC<ColorCategoryProps> = ({ name, prefix, isSystem = false, systemTokens = [] }) => {
  const shades = isSystem ? [''] : [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

  return (
    <div className="w-48 mb-8 font-proxima">
      <h2 className="mb-2 text-lg font-bold">{name}</h2>
      {!isSystem && (
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 mr-2 rounded" style={{ backgroundColor: `hsl(var(${prefix}50))` }}></div>
          <span className="font-mono text-sm">50</span>
        </div>
      )}
      {isSystem ? (
        systemTokens.map((token) => {
          const colorValue = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
          return <ColorSwatch key={token} name={token} value={colorValue} />;
        })
      ) : (
        shades.map((shade) => {
          const varName = `${prefix}${shade}`;
          const colorValue = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
          return <ColorSwatch key={shade} name={varName} value={colorValue} />;
        })
      )}
    </div>
  );
};

export const ColorTokensDocumentation: React.FC = () => {
  const categories = [
    { name: 'Primary', prefix: '--ref-primary-' },
    { name: 'Secondary', prefix: '--ref-secondary-' },
    { name: 'Accent A', prefix: '--ref-accent-a-' },
    { name: 'Accent B', prefix: '--ref-accent-b-' },
    { name: 'Accent C', prefix: '--ref-accent-c-' },
    { name: 'Neutral', prefix: '--ref-neutral-' },
    { name: 'Error', prefix: '--ref-error-' },
    { name: 'Success', prefix: '--ref-success-' },
    { name: 'Warning', prefix: '--ref-warning-' },
    { name: 'Information', prefix: '--ref-information-' },
  ];

  const systemCategories = [
    { name: 'Success', tokens: ['--sys-success', '--sys-on-success', '--sys-success-container', '--sys-on-success-container', '--sys-success-border'] },
    { name: 'Warning', tokens: ['--sys-warning', '--sys-on-warning', '--sys-warning-container', '--sys-on-warning-container', '--sys-warning-border'] },
    { name: 'Error', tokens: ['--sys-error', '--sys-on-error', '--sys-error-container', '--sys-on-error-container', '--sys-error-border'] },
    { name: 'Information', tokens: ['--sys-information', '--sys-on-information', '--sys-information-container', '--sys-on-information-container', '--sys-on-information-container-variant', '--sys-information-border'] },
    { name: 'Neutral', tokens: ['--sys-neutral', '--sys-on-neutral', '--sys-neutral-container', '--sys-on-neutral-container', '--sys-neutral-border'] },
    { name: 'Surface', tokens: ['--sys-surface', '--sys-surface-bright', '--sys-on-surface', '--sys-on-surface-variant', '--sys-surface-container', '--sys-on-surface-container', '--sys-surface-container-bright', '--sys-inverse-surface', '--sys-on-inverse-surface', '--sys-inverse-surface-container', '--sys-on-inverse-surface-container'] },
    { name: 'Primary', tokens: ['--sys-primary', '--sys-on-primary', '--sys-primary-container', '--sys-on-primary-container'] },
    { name: 'Secondary', tokens: ['--sys-secondary', '--sys-secondary-pressed', '--sys-on-secondary', '--sys-secondary-container', '--sys-on-secondary-container', '--sys-on-secondary-inverse', '--sys-secondary-text'] },
    { name: 'Accent A', tokens: ['--sys-accent-a', '--sys-on-accent-a', '--sys-accent-a-container', '--sys-on-accent-a-container', '--sys-accent-a-border'] },
    { name: 'Accent B', tokens: ['--sys-accent-b', '--sys-on-accent-b', '--sys-accent-b-container', '--sys-on-accent-b-container', '--sys-accent-b-border'] },
    { name: 'Accent C', tokens: ['--sys-accent-c', '--sys-on-accent-c', '--sys-accent-c-container', '--sys-on-accent-c-container', '--sys-accent-c-border'] },
  ];

  return (
    <div className="p-8 bg-background text-foreground font-proxima">
      <h2 className="mb-4 text-2xl font-bold">Reference Colors</h2>
      <div className="flex flex-wrap gap-8 mb-8">
        {categories.map((category) => (
          <ColorCategory key={category.name} name={category.name} prefix={category.prefix} />
        ))}
      </div>
      <h2 className="mb-4 text-2xl font-bold">System Colors</h2>
      <div className="flex flex-wrap gap-8">
        {systemCategories.map((category) => (
          <ColorCategory key={category.name} name={category.name} prefix="" isSystem systemTokens={category.tokens} />
        ))}
      </div>
    </div>
  );
};