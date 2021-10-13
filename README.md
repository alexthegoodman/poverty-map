- `npm run setup`, `npm run start`

More Lerna

- `npm run bootstrap` or `lerna run start --stream` runs `npm start` in all packages at once
- Use `lerna create` or `lerna add` to add new packages
- `lerna bootstrap` installs `node_modules` for all packages
- `lerna add eslint --scope=package*` will add eslint to package.jsons in all packages at once

References

- https://medium.com/rewrite-tech/how-to-create-a-monorepo-with-lerna-3ed6dfec5021
