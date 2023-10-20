import "./testimonials.scss"

export default function Testimonials() {
  
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img className="left" src="assets/right-arrow.png" alt="" />
            <img
            className="user"
              src="https://images.ctfassets.net/pdf29us7flmy/JwfQP2Ia18nSKxSZdzqhJ/cf932866638dbffc31ea2cbd506d445d/wfh-remote-work-from-home-laptop-desk.jpg?w=1440&q=100&fm=avif"
              alt=""
            />
            <img className="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa
            minus optio in alias accusantium dolorum ratione sunt deleniti
            provident.
          </div>
          <div className="bottom">
            <h3>Alex</h3>
            <h4>CEO of LAMA</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
