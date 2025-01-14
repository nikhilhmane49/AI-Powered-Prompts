
import '@styles/globals.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider';
export const metadata = {
    title: "prompt-ai",
    description:"Discover & share AI prompts"
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      {/* Corrected "lag" to "lang" */}
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
              <main className="app">
                  <Nav/>
                  {children}
              </main>{" "}
      </body>
    </html>
  );
}

export default RootLayout
