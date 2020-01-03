ALL: server/swagger_server/swagger/swagger.yaml client/src/api/index.js

server/swagger_server/swagger/swagger.yaml: family-context-api.yaml
	rm -rf build/python
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:3.0.15 generate \
		-i /local/family-context-api.yaml \
		-l python-flask \
		-o /local/build/python/
	rsync -avP --delete build/python/swagger_server server/.

client/src/api/index.js: family-context-api.yaml
	rm -rf build/javascript
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:3.0.15 generate \
		-i /local/family-context-api.yaml \
		-l javascript \
		-o /local/build/javascript/
	mkdir -p ./client/src/api
	rsync -avP --delete build/javascript/src/* client/src/api/.
	mkdir -p ./client/docs/api
	rsync -avP --delete build/javascript/docs/* client/docs/api/.

clean :
	rm -rf build

