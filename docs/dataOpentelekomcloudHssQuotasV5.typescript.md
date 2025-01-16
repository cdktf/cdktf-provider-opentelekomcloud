# `dataOpentelekomcloudHssQuotasV5` Submodule <a name="`dataOpentelekomcloudHssQuotasV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssQuotasV5 <a name="DataOpentelekomcloudHssQuotasV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5 opentelekomcloud_hss_quotas_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5(scope: Construct, id: string, config?: DataOpentelekomcloudHssQuotasV5Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config">DataOpentelekomcloudHssQuotasV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config">DataOpentelekomcloudHssQuotasV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetChargingMode">resetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetUsedStatus">resetUsedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetChargingMode` <a name="resetChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetChargingMode"></a>

```typescript
public resetChargingMode(): void
```

##### `resetHostName` <a name="resetHostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUsedStatus` <a name="resetUsedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetUsedStatus"></a>

```typescript
public resetUsedStatus(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssQuotasV5 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudHssQuotasV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudHssQuotasV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudHssQuotasV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssQuotasV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.quotas">quotas</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList">DataOpentelekomcloudHssQuotasV5QuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingModeInput">chargingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatusInput">usedStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingMode">chargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatus">usedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `quotas`<sup>Required</sup> <a name="quotas" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.quotas"></a>

```typescript
public readonly quotas: DataOpentelekomcloudHssQuotasV5QuotasList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList">DataOpentelekomcloudHssQuotasV5QuotasList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `chargingModeInput`<sup>Optional</sup> <a name="chargingModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingModeInput"></a>

```typescript
public readonly chargingModeInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `usedStatusInput`<sup>Optional</sup> <a name="usedStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatusInput"></a>

```typescript
public readonly usedStatusInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `usedStatus`<sup>Required</sup> <a name="usedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatus"></a>

```typescript
public readonly usedStatus: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssQuotasV5Config <a name="DataOpentelekomcloudHssQuotasV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudHssQuotasV5Config: dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#category DataOpentelekomcloudHssQuotasV5#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.chargingMode">chargingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#charging_mode DataOpentelekomcloudHssQuotasV5#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#host_name DataOpentelekomcloudHssQuotasV5#host_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#id DataOpentelekomcloudHssQuotasV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#resource_id DataOpentelekomcloudHssQuotasV5#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#status DataOpentelekomcloudHssQuotasV5#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.usedStatus">usedStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#used_status DataOpentelekomcloudHssQuotasV5#used_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#version DataOpentelekomcloudHssQuotasV5#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#category DataOpentelekomcloudHssQuotasV5#category}.

---

##### `chargingMode`<sup>Optional</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#charging_mode DataOpentelekomcloudHssQuotasV5#charging_mode}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#host_name DataOpentelekomcloudHssQuotasV5#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#id DataOpentelekomcloudHssQuotasV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#resource_id DataOpentelekomcloudHssQuotasV5#resource_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#status DataOpentelekomcloudHssQuotasV5#status}.

---

##### `usedStatus`<sup>Optional</sup> <a name="usedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.usedStatus"></a>

```typescript
public readonly usedStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#used_status DataOpentelekomcloudHssQuotasV5#used_status}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/hss_quotas_v5#version DataOpentelekomcloudHssQuotasV5#version}.

---

### DataOpentelekomcloudHssQuotasV5Quotas <a name="DataOpentelekomcloudHssQuotasV5Quotas" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudHssQuotasV5Quotas: dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssQuotasV5QuotasList <a name="DataOpentelekomcloudHssQuotasV5QuotasList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudHssQuotasV5QuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudHssQuotasV5QuotasOutputReference <a name="DataOpentelekomcloudHssQuotasV5QuotasOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssQuotasV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.chargingMode">chargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.sharedQuota">sharedQuota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.usedStatus">usedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas">DataOpentelekomcloudHssQuotasV5Quotas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.chargingMode"></a>

```typescript
public readonly chargingMode: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sharedQuota`<sup>Required</sup> <a name="sharedQuota" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.sharedQuota"></a>

```typescript
public readonly sharedQuota: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `usedStatus`<sup>Required</sup> <a name="usedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.usedStatus"></a>

```typescript
public readonly usedStatus: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudHssQuotasV5Quotas;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas">DataOpentelekomcloudHssQuotasV5Quotas</a>

---



