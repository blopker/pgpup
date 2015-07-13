all:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

clean:
	rm -rf .sass-cache
	rm -rf _site
