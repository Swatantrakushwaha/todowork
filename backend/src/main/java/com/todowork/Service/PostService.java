package com.todowork.Service;

import com.todowork.Model.Post;
import com.todowork.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository repo;

    public List<Post>getAll(){
        return repo.findAll();
    }
        public Post getById(Long Id){
        return repo.findById(Id).orElseThrow(() -> new RuntimeException("Post with ID " + Id + " not found!"));
        }

        public Post create(Post post){
        return repo.save(post);
        }
        public void delete(Long Id){
        repo.deleteById(Id);
        }

        public Post update(Long Id,Post post){
        Post pre= repo.findById(Id).orElseThrow();

        pre.setTitle(post.getTitle());
        pre.setContent(post.getContent());
        pre.setAuthor(post.getAuthor());

        return repo.save(pre);

        }
}

