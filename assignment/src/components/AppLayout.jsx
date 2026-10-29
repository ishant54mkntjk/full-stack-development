import Header from './Header';
import Footer from './Footer';

function AppLayout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
            <Header />
            <main style={{ flex: 1, padding: '20px' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
