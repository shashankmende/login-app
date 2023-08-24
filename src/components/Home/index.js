// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: false, heading: 'Please Login', content: 'Login'}

  Button = () => {
    const {isLogin, heading, content} = this.state
    if (isLogin === false) {
      this.setState(() => ({
        isLogin: true,
        heading: 'Welcome User',
        content: 'Logout',
      }))
    } else {
      this.setState(() => ({
        isLogin: false,
        heading: 'Please Login',
        content: 'Login',
      }))
    }
  }

  render() {
    const {heading, content} = this.state
    return (
      <div className="bg-container">
        <div className="blue-container">
          <h1>{heading}</h1>
          <button onClick={this.Button}>{content}</button>
        </div>
      </div>
    )
  }
}

export default Home
