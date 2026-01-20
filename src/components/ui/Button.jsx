import clsx from 'clsx';

export function Button({ variant = 'primary', className, children, ...props }) {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20',
        outline: 'border border-white/20 text-white hover:bg-white/5',
        ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    };

    return (
        <button
            className={clsx(
                'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
