Form fields for BlueJay Malgudi — labelled `Input`, `Textarea` and `Select`, all sharing a cream-sunk fill, hairline border and maroon focus ring.

```jsx
<Input label="Flat Number" placeholder="e.g., A-101" />
<Select label="Category">
  <option value="">Select a category</option>
  <option value="water">Water Supply</option>
</Select>
<Textarea label="Details" rows={5} placeholder="Describe in detail…" />
```

Each takes an optional uppercase `label` and helper `hint`. They spread native props (`value`, `onChange`, `placeholder`, `disabled`, …).
