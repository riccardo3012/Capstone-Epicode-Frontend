import React, { useState } from "react";
import Footer from "./Footer";
import TopBar from "./Topbar";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sfondoNero from "../assets/sfondoNeroCard.png";

const Diary = () => {
  const [showAddPost, setShowAddPost] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [deletingPost, setDeletingPost] = useState(null);

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleAddPost = () => {
    const newPost = { id: Date.now(), title: postTitle, text: postText, date: new Date().toLocaleString() };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setPostTitle("");
    setPostText("");
    setShowAddPost(false);
  };

  const handleEditTitleChange = (e, postId) => {
    setEditingPost((prevPost) => ({ ...prevPost, title: e.target.value }));
  };

  const handleEditTextChange = (e, postId) => {
    setEditingPost((prevPost) => ({ ...prevPost, text: e.target.value }));
  };

  const handleEditPost = () => {
    //  modifica del post
    const updatedPosts = posts.map((post) => (post.id === editingPost.id ? editingPost : post));
    setPosts(updatedPosts);
    setEditingPost(null);
  };

  const handleDeletePost = () => {
    // eliminazione del post
    const updatedPosts = posts.filter((post) => post.id !== deletingPost.id);
    setPosts(updatedPosts);
    setDeletingPost(null);
  };

  const handleCancelAddPost = () => {
    setPostTitle("");
    setPostText("");
    setShowAddPost(false);
  };

  const buttonStyle = {
    marginRight: "10px",
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${sfondoNero})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <TopBar />
        <div>
          <h1>Dispatcher's Diary</h1>
          <button className="addpostbutton" style={{ marginLeft: "100px" }} onClick={() => setShowAddPost(true)}>
            Aggiungi Post
          </button>
        </div>
        <div className="main-content" style={{ width: "100%" }}>
          {showAddPost && (
            <div className="add-post-section">
              <h2>Aggiungi un nuovo post</h2>
              <form>
                <div className="form-group">
                  <label>Titolo:</label>
                  <input type="text" value={postTitle} onChange={handleTitleChange} />
                </div>
                <div className="form-group">
                  <label>Testo:</label>
                  <textarea value={postText} onChange={handleTextChange} />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={handleAddPost}>
                    Pubblica
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelAddPost}
                    className="cancel-button red-button"
                    style={buttonStyle}
                  >
                    Annulla
                  </button>
                </div>
              </form>
            </div>
          )}
          {editingPost && (
            <div className="edit-post-section">
              <h2>Modifica il post:</h2>
              <button type="button" onClick={handleEditPost} className="edit-button" style={buttonStyle}>
                Salva Modifiche
              </button>
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="cancel-button red-button"
                style={buttonStyle}
              >
                Annulla
              </button>
              <form>
                <div className="form-group">
                  <label>Titolo:</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => handleEditTitleChange(e, editingPost.id)}
                  />
                </div>
                <div className="form-group">
                  <label>Testo:</label>
                  <textarea value={editingPost.text} onChange={(e) => handleEditTextChange(e, editingPost.id)} />
                </div>
                <div className="form-actions"></div>
              </form>
            </div>
          )}
          {deletingPost && (
            <div className="delete-post-section">
              <p>Sei sicuro di voler eliminare questo post?</p>

              <button type="button" onClick={handleDeletePost} className="delete-button red-button" style={buttonStyle}>
                Elimina
              </button>
              <button
                type="button"
                onClick={() => setDeletingPost(null)}
                className="cancel-button red-button"
                style={buttonStyle}
              >
                Annulla
              </button>
            </div>
          )}
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-buttons">
                  <button onClick={() => setEditingPost(post)} className="edit-button" style={buttonStyle}>
                    Modifica
                  </button>
                  <button
                    onClick={() => setDeletingPost(post)}
                    className="delete-button red-button"
                    style={buttonStyle}
                  >
                    Elimina
                  </button>
                </div>
              </div>
              <p className="post-text">{post.text}</p>
              <p className="post-date">Data di pubblicazione: {post.date}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Diary;
