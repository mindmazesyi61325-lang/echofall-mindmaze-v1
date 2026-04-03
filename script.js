import { db } from './firebase.js';
import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Mood function
window.setMood = function(mood) {
  alert("Mood saved: " + mood);
}

// Post vent
window.postVent = async function() {
  const input = document.getElementById("ventInput");
  const text = input.value.trim();

  if (!text) {
    alert("Write something!");
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      text: text,
      time: Date.now()
    });

    input.value = "";
    loadPosts();

  } catch (error) {
    console.error("Error adding post:", error);
    alert("Something went wrong");
  }
}

// Load posts
async function loadPosts() {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "Loading...";

  try {
    const querySnapshot = await getDocs(collection(db, "posts"));

    postsDiv.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const p = document.createElement("p");
      p.innerText = doc.data().text;
      postsDiv.appendChild(p);
    });

  } catch (error) {
    console.error("Error loading posts:", error);
    postsDiv.innerHTML = "Failed to load posts";
  }
}

// Run on load
window.onload = loadPosts;
