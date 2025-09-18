# `dataOpentelekomcloudDnsNameserversV2` Submodule <a name="`dataOpentelekomcloudDnsNameserversV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDnsNameserversV2 <a name="DataOpentelekomcloudDnsNameserversV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2 opentelekomcloud_dns_nameservers_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2(scope: Construct, id: string, config?: DataOpentelekomcloudDnsNameserversV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config">DataOpentelekomcloudDnsNameserversV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config">DataOpentelekomcloudDnsNameserversV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.putNameservers">putNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNameservers` <a name="putNameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.putNameservers"></a>

```typescript
public putNameservers(value: IResolvable | DataOpentelekomcloudDnsNameserversV2Nameservers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.putNameservers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameservers` <a name="resetNameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetNameservers"></a>

```typescript
public resetNameservers(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDnsNameserversV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudDnsNameserversV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudDnsNameserversV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudDnsNameserversV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDnsNameserversV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList">DataOpentelekomcloudDnsNameserversV2NameserversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameserversInput">nameserversInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameservers"></a>

```typescript
public readonly nameservers: DataOpentelekomcloudDnsNameserversV2NameserversList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList">DataOpentelekomcloudDnsNameserversV2NameserversList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameserversInput"></a>

```typescript
public readonly nameserversInput: IResolvable | DataOpentelekomcloudDnsNameserversV2Nameservers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDnsNameserversV2Config <a name="DataOpentelekomcloudDnsNameserversV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudDnsNameserversV2Config: dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#id DataOpentelekomcloudDnsNameserversV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.nameservers">nameservers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]</code> | nameservers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#id DataOpentelekomcloudDnsNameserversV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.nameservers"></a>

```typescript
public readonly nameservers: IResolvable | DataOpentelekomcloudDnsNameserversV2Nameservers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]

nameservers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#nameservers DataOpentelekomcloudDnsNameserversV2#nameservers}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}.

---

### DataOpentelekomcloudDnsNameserversV2Nameservers <a name="DataOpentelekomcloudDnsNameserversV2Nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.Initializer"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudDnsNameserversV2Nameservers: dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#hostname DataOpentelekomcloudDnsNameserversV2#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#priority DataOpentelekomcloudDnsNameserversV2#priority}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#hostname DataOpentelekomcloudDnsNameserversV2#hostname}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/dns_nameservers_v2#priority DataOpentelekomcloudDnsNameserversV2#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDnsNameserversV2NameserversList <a name="DataOpentelekomcloudDnsNameserversV2NameserversList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudDnsNameserversV2NameserversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOpentelekomcloudDnsNameserversV2Nameservers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>[]

---


### DataOpentelekomcloudDnsNameserversV2NameserversOutputReference <a name="DataOpentelekomcloudDnsNameserversV2NameserversOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudDnsNameserversV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOpentelekomcloudDnsNameserversV2Nameservers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>

---



