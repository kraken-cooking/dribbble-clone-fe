export type IShot = {
  imageUrl: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    views: number;
    comments: number;
  };
};

export interface CreateShotDto {
  title: string;
  description?: string;
  image_url: string;
  tags: string[];
}

export type User = {
  id: string;
  email: string;
  name: string;
};
