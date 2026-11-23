import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Comment {
  id: number;
  author: string;
  authorAvatar?: string;
  text: string;
  timeAgo: string;
}

interface Post {
  id: number;
  author: string;
  authorAvatar?: string;
  timeAgo: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  isLiked: boolean;
  comments?: Comment[];
  showComments?: boolean;
  newComment?: string;
}

interface Appointment {
  id: number;
  name: string;
  avatar?: string;
  date: string;
  time: string;
  status: 'Pending' | 'Accepted';
}

@Component({
  selector: 'app-p-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './p-dashboard.component.html',
  styleUrl: './p-dashboard.component.css'
})
export class PDashboardComponent implements OnInit, AfterViewInit {
  appointments: Appointment[] = [
    {
      id: 1,
      name: 'Dr. Sarah Lee',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150',
      date: '20/11/2024',
      time: '06:00 PM',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Dr. Olivia',
      avatar: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=150',
      date: '21/11/2024',
      time: '02:30 PM',
      status: 'Accepted'
    }
  ];

  posts: Post[] = [
    {
      id: 1,
      author: 'Dr. Sarah Williams',
      authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150',
      timeAgo: '2 hours ago',
      title: 'Overview of Anxiety Disorders',
      content: 'Anxiety is one of the most common mental health disorders, affecting millions of people worldwide. It can manifest in various forms, including generalized anxiety disorder, panic disorder, social anxiety disorder, and specific phobias.',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800',
      likes: 24,
      isLiked: false,
      comments: [],
      showComments: false
    },
    {
      id: 2,
      author: 'Dr. Michael Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150',
      timeAgo: '5 hours ago',
      title: 'Understanding Depression',
      content: 'Depression is a serious mood disorder that affects how you feel, think, and handle daily activities. Early recognition and proper treatment are crucial for recovery.',
      image: 'https://images.unsplash.com/photo-1454894760150-5b95b4a2c404?w=800',
      likes: 18,
      isLiked: false,
      comments: [],
      showComments: false
    }
  ];

  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // Initialize any data or subscribe to services
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initializeAnimations();
    }
  }

  private initializeAnimations() {
    if (!this.isBrowser) return;

    const elements = document.querySelectorAll('.post-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  onPendingRequestsClick() {
    this.router.navigate(['/pending-requests']);
  }

  onApprovedRequestsClick() {
    this.router.navigate(['/approved-requests']);
  }

  navigateToAppointmentDetails(appointmentId: number) {
    this.router.navigate(['/appointment-details', appointmentId]);
  }

  toggleLike(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.isLiked = !post.isLiked;
      post.likes += post.isLiked ? 1 : -1;
    }
  }

  openCommentDialog(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.showComments = !post.showComments;
    }
  }

  addComment(postId: number, commentText: string) {
    if (!commentText?.trim()) return;

    const post = this.posts.find(p => p.id === postId);
    if (post) {
      const newComment: Comment = {
        id: (post.comments?.length || 0) + 1,
        author: 'Current User',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
        text: commentText,
        timeAgo: 'Just now'
      };

      post.comments = [...(post.comments || []), newComment];
      post.newComment = ''; // Clear input
    }
  }

  sharePost(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      // Here you can implement your sharing logic
      // For example, copying to clipboard or opening a share dialog
      alert(`Sharing post: ${post.title}`);
    }
  }
}