# Strapi plugin layout-editor

Exposes another endpoint to get layout data

Note: this plugin is for the strapi backend only, it requires a seperate ui to work correctly.

```
http://localhost:1337/layout-editor/:model/:modelId/layouts
```

It will return with an object of

```typescript
const model = {
    id: string;
    model: string;
    modelId: string;
    layoutJson: LayoutJson;
}
```

where your LayoutJson interface, at a minimum, has these fields,

```typescript
interface LayoutJson {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
```
