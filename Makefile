

server/swagger_server/swagger/swagger.yaml: family-context-api.yaml
	rm -rf build
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:3.0.11 generate \
		-i /local/family-context-api.yaml \
		-l python-flask \
		-o /local/build
	rsync -avP --delete build/swagger_server server/.

clean :
	rm -rf build

