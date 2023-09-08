<script lang="ts">
  type Variant = "test1" | "test2" | "test3";
  export let variant: Variant = "test1";
  export let open: boolean = false;
</script>

<div>
  {variant}
  isOpen : {open}
</div>
