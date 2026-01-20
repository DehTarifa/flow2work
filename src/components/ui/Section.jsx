import clsx from 'clsx';

export function Section({ className, id, children }) {
    return (
        <section id={id} className={clsx('py-16 md:py-24', className)}>
            {children}
        </section>
    );
}
