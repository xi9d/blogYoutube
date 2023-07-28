package com.foxbash.blog_backend.Service;

import com.foxbash.blog_backend.Model.Post;
import com.foxbash.blog_backend.Repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{
    private final PostRepository postRepository;

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post createPost(MultipartFile image,
                           String title,
                           String content) {
        Post post = new Post();
        String filename = StringUtils.cleanPath(image.getOriginalFilename());
        if (filename.contains("..")){
            System.out.println("Invalid file");
        }
        try {
            post.setImage(Base64.getEncoder().encode(image.getBytes()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        post.setTitle(title);
        post.setContent(content);
        postRepository.save(post);
        return post;
    }

    @Override
    public Post editPost(Long id,
                         MultipartFile image,
                         String title,
                         String content) {
        Optional<Post> optionalPost = postRepository.findById(id);
        if (optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setTitle(title);
            post.setContent(content);
            try {
                post.setImage(Base64.getEncoder().encode(image.getBytes()));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            postRepository.save(post);
            return post;
        }
        return null;
    }

    @Override
    public boolean removePost(Long id) {
        Optional<Post> optionalPost = postRepository.findById(id);
        if (optionalPost.isPresent()){
            Post post = optionalPost.get();
            postRepository.delete(post);
            return true;
        }
        return false;
    }
}
