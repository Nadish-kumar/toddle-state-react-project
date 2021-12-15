import logo from './logo.svg';
import './App.css';
import ShoppingCart from './Cart';

function App() {
  let priceList = [
    {
      plan : "FREE",
      price : "0",
      features : [
        {
          name : "Single Users",
          enable :  true
        },
        {
          name : "5GB Storage",
          enable :  true
        },
        {
        name : "Unlimited Public Projects",
          enable :  true
        },
        {
        name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : false
        },
        {
      name :"Dedicated Phone Support",
          enable : false
        },
        {
        name : "Free Subdomain",
          enable : false
        },
        {
        name : "Monthly Status Reports",
          enable : false
        }

      ]
    },
    {
      plan : "Plus",
      price : "9",
      features : [
        {
          name : "5 Users",
          enable :  true,
          iStrong : true
        },
        {
          name : "50GB Storage",
          enable :  true
        },
        {
        name : "Unlimited Public Projects",
          enable :  true
        },
        {
        name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : true
        },
        {
      name :"Dedicated Phone Support",
          enable : true
        },
        {
        name : "Free Subdomain",
          enable : true
        },
        {
        name : "Monthly Status Reports",
          enable : false
        }
      ]
    },
    {
      plan : "Pro",
      price : "49",
      features : [
        {
          name : "Unlimited Users",
          enable :  true,
          iStrong : true
        },
        {
          name : "150GB Storage",
          enable :  true
        },
        {
        name : "Unlimited Public Projects",
          enable :  true
        },
        {
        name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : true
        },
        {
      name :"Dedicated Phone Support",
          enable : true
        },
        {
        name : "Free Subdomain",
          enable : true
        },
        {
        name : "Monthly Status Reports",
          enable : true
        }
      ]
    }
  ];

  return ( <section class="pricing py-5">
  <div class="container">
    <div class="row">
   {
      priceList.map(obj => <ShoppingCart data = {obj}></ShoppingCart>)
   }
      
      
    
    </div>
    </div>
    </section>
  );
}

export default App;
