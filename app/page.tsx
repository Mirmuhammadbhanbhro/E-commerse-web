import Cards from "./components/Cards"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Sale from "./components/Sale"
import Footer from "../app/components/Footer"
import Form from "./components/Form"
import Dashboard from "./components/dashboard"
function HomePage(){
  return(
    <div>
      <Header />
      <Hero />
      <Sale />
      <Products />
      <Cards />
      <Dashboard/>
      <Form />
       <Footer />
    </div>
  )
}
export default HomePage