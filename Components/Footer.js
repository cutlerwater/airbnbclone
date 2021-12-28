function Footer() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 bg-gray-100 px-32 py-14 border-t text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>NextJS</p>
          <p>ReactJS</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
  
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>GitLab</p>
          <p>Firebase/Firestore</p>
          <p>MongoDB</p>
          <p>Cutlerwater</p>
        </div>
  
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Cutlerwater</p>
          <p>Netlify</p>
          <p>Zero to Full Stack Hero</p>
          <p>Instagram</p>
          <p>Git Hub</p>
        </div>
  
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Say Hi YouTube</p>
          <p>Easter Eggs</p>
          <p>Let's go Brandon!</p>
        </div>
      </div>
    );
  }
  
  export default Footer;