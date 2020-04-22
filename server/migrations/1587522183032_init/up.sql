CREATE TABLE public.posts (
    post_id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    content text NOT NULL,
    is_public boolean DEFAULT false NOT NULL,
    author_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    full_name text NOT NULL,
    user_name text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
