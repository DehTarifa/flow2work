import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollToHash() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (e, href) => {
        if (e?.preventDefault) e.preventDefault();
        if (!href) return;

        if (href.startsWith('/')) {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (!href.startsWith('#')) {
            navigate(href);
            return;
        }

        if (pathname !== '/') {
            navigate('/' + href);
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
}
