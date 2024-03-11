# `dataOpentelekomcloudCssFlavorV1` Submodule <a name="`dataOpentelekomcloudCssFlavorV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCssFlavorV1 <a name="DataOpentelekomcloudCssFlavorV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1 opentelekomcloud_css_flavor_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1(scope: Construct, id: string, config?: DataOpentelekomcloudCssFlavorV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config">DataOpentelekomcloudCssFlavorV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config">DataOpentelekomcloudCssFlavorV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange">putDiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetDiskRange">resetDiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinCpu">resetMinCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinRam">resetMinRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDiskRange` <a name="putDiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange"></a>

```typescript
public putDiskRange(value: DataOpentelekomcloudCssFlavorV1DiskRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.putDiskRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---

##### `resetDiskRange` <a name="resetDiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetDiskRange"></a>

```typescript
public resetDiskRange(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinCpu` <a name="resetMinCpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinCpu"></a>

```typescript
public resetMinCpu(): void
```

##### `resetMinRam` <a name="resetMinRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetMinRam"></a>

```typescript
public resetMinRam(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCssFlavorV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCssFlavorV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCssFlavorV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRange">diskRange</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference">DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRangeInput">diskRangeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpuInput">minCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRamInput">minRamInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpu">minCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRam">minRam</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `diskRange`<sup>Required</sup> <a name="diskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRange"></a>

```typescript
public readonly diskRange: DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference">DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference</a>

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `diskRangeInput`<sup>Optional</sup> <a name="diskRangeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.diskRangeInput"></a>

```typescript
public readonly diskRangeInput: DataOpentelekomcloudCssFlavorV1DiskRange;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minCpuInput`<sup>Optional</sup> <a name="minCpuInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpuInput"></a>

```typescript
public readonly minCpuInput: number;
```

- *Type:* number

---

##### `minRamInput`<sup>Optional</sup> <a name="minRamInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRamInput"></a>

```typescript
public readonly minRamInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minCpu`<sup>Required</sup> <a name="minCpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minCpu"></a>

```typescript
public readonly minCpu: number;
```

- *Type:* number

---

##### `minRam`<sup>Required</sup> <a name="minRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.minRam"></a>

```typescript
public readonly minRam: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCssFlavorV1Config <a name="DataOpentelekomcloudCssFlavorV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCssFlavorV1Config: dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.diskRange">diskRange</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | disk_range block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minCpu">minCpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minRam">minRam</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskRange`<sup>Optional</sup> <a name="diskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.diskRange"></a>

```typescript
public readonly diskRange: DataOpentelekomcloudCssFlavorV1DiskRange;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

disk_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#disk_range DataOpentelekomcloudCssFlavorV1#disk_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minCpu`<sup>Optional</sup> <a name="minCpu" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minCpu"></a>

```typescript
public readonly minCpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}.

---

##### `minRam`<sup>Optional</sup> <a name="minRam" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.minRam"></a>

```typescript
public readonly minRam: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1Config.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}.

---

### DataOpentelekomcloudCssFlavorV1DiskRange <a name="DataOpentelekomcloudCssFlavorV1DiskRange" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.Initializer"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCssFlavorV1DiskRange: dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minFrom">minFrom</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minTo">minTo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}. |

---

##### `minFrom`<sup>Optional</sup> <a name="minFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minFrom"></a>

```typescript
public readonly minFrom: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}.

---

##### `minTo`<sup>Optional</sup> <a name="minTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange.property.minTo"></a>

```typescript
public readonly minTo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.4/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference <a name="DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCssFlavorV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinFrom">resetMinFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinTo">resetMinTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinFrom` <a name="resetMinFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinFrom"></a>

```typescript
public resetMinFrom(): void
```

##### `resetMinTo` <a name="resetMinTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.resetMinTo"></a>

```typescript
public resetMinTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.from">from</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.to">to</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFromInput">minFromInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minToInput">minToInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFrom">minFrom</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minTo">minTo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

---

##### `minFromInput`<sup>Optional</sup> <a name="minFromInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFromInput"></a>

```typescript
public readonly minFromInput: number;
```

- *Type:* number

---

##### `minToInput`<sup>Optional</sup> <a name="minToInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minToInput"></a>

```typescript
public readonly minToInput: number;
```

- *Type:* number

---

##### `minFrom`<sup>Required</sup> <a name="minFrom" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minFrom"></a>

```typescript
public readonly minFrom: number;
```

- *Type:* number

---

##### `minTo`<sup>Required</sup> <a name="minTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.minTo"></a>

```typescript
public readonly minTo: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCssFlavorV1DiskRange;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCssFlavorV1.DataOpentelekomcloudCssFlavorV1DiskRange">DataOpentelekomcloudCssFlavorV1DiskRange</a>

---



