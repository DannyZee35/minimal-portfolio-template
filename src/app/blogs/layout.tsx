 
 

 

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
       
  
        <div className="max-w-5xl mx-auto line-x p-8 prose">
            {children}
        </div>
     
       
        
    
  );
}
