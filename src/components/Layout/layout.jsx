import Header from "@/components/Header/header";

export default function Layout({ children }) {
  return (      
      <div>
        <Header />
        {children}
      </div>
  );
}
