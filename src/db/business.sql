--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6
-- Dumped by pg_dump version 14.6

-- Started on 2023-11-01 03:04:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3308 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: business; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.business (
    id character varying(50),
    name character varying(100),
    image_url character varying(100),
    is_closed boolean,
    review_count bigint,
    rating double precision,
    price character varying(50),
    distance double precision
);


ALTER TABLE public.business OWNER TO postgres;

--
-- TOC entry 3302 (class 0 OID 16395)
-- Dependencies: 209
-- Data for Name: business; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.business VALUES ('j1S3NUrkB3BVT49n_e76NQ', 'Best Bagel & Coffee', 'https://s3-media1.fl.yelpcdn.com/bphoto/91RtGGwbZYMurzxGHAbhzw/o.jpg', true, 4618, 5, '$$$', 4202.248023208401);
INSERT INTO public.business VALUES ('1233', 'The hahaha', 'https://s3-media1.fl.yelpcdn.com/bphoto/Tnt4JT48wHJu1aDYzcCFQw/o.jpg', false, 700, 4, '$$$$', 6952.669745324919);
INSERT INTO public.business VALUES ('_LJFf9YqpYxvExTvV00000', 'Julianasssss', 'https://s3-media2.fl.yelpcdn.com/bphoto/od36nFW220aMFAnNP00ocw/o.jpg', false, 2701, 4.5, '$$', 318.8762608116642);
INSERT INTO public.business VALUES ('debeb37f-d8c5-4b97-8050-6e220de3f515', 'The Iqbal', 'https://s3-media1.fl.yelpcdn.com/bphoto/Tnt4JT48wHJu1aDYzcCFQw/o.jpg', false, 1170, 3.5, '$$$$', 6352.669745324919);
INSERT INTO public.business VALUES ('edba864f-8d06-4112-a489-7954f9c1ebe8', 'the jelekss', 'https://s3-media1.fl.yelpcdn.com/bphoto/Tnt4JT48wHJu1aDYzcCFQw/o.jpg', true, 5170, 1.5, '$', 1352.669745324919);
INSERT INTO public.business VALUES ('c2933cb2-6acb-4059-8f08-e2306a92e9b4', 'TESTING', 'https://s3-media1.fl.yelpcdn.com/bphoto/Tnt4JT48wHJu1aDYzcCFQw/o.jpg', true, 10, 5, '$$$$$', 2352.669745324919);


-- Completed on 2023-11-01 03:04:11

--
-- PostgreSQL database dump complete
--

