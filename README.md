# Poverty Map

## Getting Started

### Setup Enviornment

- `volta install node`
- `volta install yarn`

### Start Monorepo

- `yarn setup`
- `yarn start`

## More Information

### Lerna Commands

- `yarn bootstrap` or `lerna run start --stream` runs `yarn start` in all packages at once
- Use `lerna create` or `lerna add` to add new packages
- `lerna bootstrap` installs `node_modules` for all packages
- `lerna add eslint --scope=package*` will add eslint to package.jsons in all packages at once

### Packages

- Lerna
- Volta
- Husky + Commitlint
- ESLint + Prettier

- Next.js SWR
- @react-three/fiber (three.js)
- AirBnB's @visx/visx (D3)

### References

- https://medium.com/rewrite-tech/how-to-create-a-monorepo-with-lerna-3ed6dfec5021
