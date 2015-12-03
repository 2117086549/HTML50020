provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "www-cutthroatbingo-com" {
  bucket = "www.cutthroatbingo.com"
  acl = "public-read"

  website {
    redirect_all_requests_to = "cutthroatbingo.com"
  }
}

resource "aws_s3_bucket" "cutthroatbingo-com" {
  bucket = "cutthroatbingo.com"
  acl = "public-read"
  policy = "${file("s3policy.json")}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "cloudflare_record" "www-cutthroatbingo-com" {
  domain = "cutthroatbingo.com"
  name = "www"
  value = "${aws_s3_bucket.www-cutthroatbingo-com.website_endpoint}"
  type = "CNAME"
  ttl = 3600
}

resource "cloudflare_record" "cutthroatbingo-com" {
  domain = "cutthroatbingo.com"
  name = "cutthroatbingo.com"
  value = "${aws_s3_bucket.cutthroatbingo-com.website_endpoint}"
  type = "CNAME"
  ttl = 3600
}