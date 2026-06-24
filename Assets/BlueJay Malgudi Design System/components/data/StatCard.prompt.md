Community-health metric tile — the headline data unit of BlueJay Malgudi (Spotlight & Snapshot).

```jsx
<StatCard icon="💧" title="Water Supply" value="80k L"
  subtitle="of 100k Litres capacity" progress={80} tone="info" live />
<StatCard icon="🛡️" title="Security Staff" value="12 Guards"
  subtitle="All positions covered" progress={100} tone="garden" />
```

`tone` colors the value and the progress fill (`maroon | garden | sand | info`). Omit `progress` for a plain metric. Pairs with `ProgressBar`, which can also be used standalone.
