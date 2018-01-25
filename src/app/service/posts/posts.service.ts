import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

export interface Post {
  title: "",
  menu_id: "",
  content: ""
}

@Injectable()
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  getPosts() {
    return this.afs.collection("posts").snapshotChanges()
      .map( post => {
        return post.map ( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      });
  }
  getConditionalPosts(field: string, condition: any, value: string) {
    return this.afs.collection("posts", ref => ref.where(field, condition, value)).snapshotChanges()
      .map( post => {
        return post.map ( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      });
  }
  addPost(post: Post) {
    this.afs.collection("posts").add(post);
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }
  updatePost(postId, post: Post) {
    this.afs.doc('posts/'+postId).update(post);
  }

}
