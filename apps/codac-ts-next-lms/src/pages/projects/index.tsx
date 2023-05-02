import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'


export default function Page() {
    return (
        <div className="container">
            <Header />
            <nav className="fixed text-red-500 top-0 left-0 w-64 py-16 h-screen bg-gray-200 shadow">
                {/* Sidebar contents */}
                <Sidebar />
            </nav>
            <main className="ml-64 pt-16 pb-10">
                {/* Main content */}
                <Projects />
            </main>
        </div>
    )
}