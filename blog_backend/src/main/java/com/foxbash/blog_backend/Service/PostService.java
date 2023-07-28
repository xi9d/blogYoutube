package com.foxbash.blog_backend.Service;

import com.foxbash.blog_backend.Model.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {
    List<Post> getAllPosts();

    Post createPost(MultipartFile image, String title, String content);

    Post editPost(Long id, MultipartFile image, String title, String content);

    boolean removePost(Long id);
}
