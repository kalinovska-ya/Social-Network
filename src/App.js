import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Start from './components/Start/Start';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import BlogContainer from './components/Blog/BlogContainer';
import Gallery from './components/Gallery/Gallery';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Search from './components/Search/Search';
import Theme from './components/Theme/Theme';
import FindMeContainer from './components/FindMe/FindMeContainer';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />

            <Route path="/profile" render={ () => <ProfileContainer /> } />
            <Route path="/chat"  render={ () => <MessagesContainer /> } />
            <Route path="/myblog"  render={ () => <BlogContainer /> } />
            <Route path="/gallery"  render={ () => <Gallery /> } />
            <Route path="/newsfeed"  render={ () => <Newsfeed /> } />
            <Route path="/search"  render={ () => <Search /> } />
            <Route path="/settings"  render={ () => <Theme /> } />
            <Route path="/Social-Network" exact render={ () => <Start /> } />

            <FindMeContainer />
            <Footer />
        </div>
    );
}

export default App;
