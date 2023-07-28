package com.foxbash.blog_backend.controller;


import com.foxbash.blog_backend.Model.Post;
import com.foxbash.blog_backend.Service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/post")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    private final PostService service;
    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts(){
        return ResponseEntity.ok(service.getAllPosts());
    }
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestPart MultipartFile image,
                                           @RequestPart String title,
                                           @RequestPart String content){
        Post post = service.createPost(image,title,content);
        return ResponseEntity.ok(post);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id,
                                           @RequestPart MultipartFile image,
                                           @RequestPart String title,
                                           @RequestPart String content){
        Post post = service.editPost(id,image,title, content);
        return ResponseEntity.ok(post);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> removePost(@PathVariable Long id){
        boolean delete = service.removePost(id);
        Map<String, Boolean> result  = new HashMap<>();
        result.put("Deleted",delete);
        return ResponseEntity.ok(result);
    }
}
