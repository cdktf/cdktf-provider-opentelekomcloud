# `dataOpentelekomcloudPrivateNatGatewayV3` Submodule <a name="`dataOpentelekomcloudPrivateNatGatewayV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudPrivateNatGatewayV3 <a name="DataOpentelekomcloudPrivateNatGatewayV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/private_nat_gateway_v3 opentelekomcloud_private_nat_gateway_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3(scope: Construct, id: string, config?: DataOpentelekomcloudPrivateNatGatewayV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config">DataOpentelekomcloudPrivateNatGatewayV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config">DataOpentelekomcloudPrivateNatGatewayV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatGatewayV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatGatewayV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudPrivateNatGatewayV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudPrivateNatGatewayV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/private_nat_gateway_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudPrivateNatGatewayV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.gateways">gateways</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.gateways"></a>

```typescript
public readonly gateways: DataOpentelekomcloudPrivateNatGatewayV3GatewaysList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudPrivateNatGatewayV3Config <a name="DataOpentelekomcloudPrivateNatGatewayV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatGatewayV3Config: dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/private_nat_gateway_v3#id DataOpentelekomcloudPrivateNatGatewayV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/private_nat_gateway_v3#name DataOpentelekomcloudPrivateNatGatewayV3#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/private_nat_gateway_v3#id DataOpentelekomcloudPrivateNatGatewayV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/private_nat_gateway_v3#name DataOpentelekomcloudPrivateNatGatewayV3#name}.

---

### DataOpentelekomcloudPrivateNatGatewayV3Gateways <a name="DataOpentelekomcloudPrivateNatGatewayV3Gateways" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatGatewayV3Gateways: dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways = { ... }
```


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs: dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.ngportIpAddress">ngportIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.virsubnetId">virsubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ngportIpAddress`<sup>Required</sup> <a name="ngportIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.ngportIpAddress"></a>

```typescript
public readonly ngportIpAddress: string;
```

- *Type:* string

---

##### `virsubnetId`<sup>Required</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.virsubnetId"></a>

```typescript
public readonly virsubnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcs</a>

---


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysList <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference <a name="DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatGatewayV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.downlinkVpcs">downlinkVpcs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.ruleMax">ruleMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.spec">spec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.transitIpPoolSizeMax">transitIpPoolSizeMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways">DataOpentelekomcloudPrivateNatGatewayV3Gateways</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `downlinkVpcs`<sup>Required</sup> <a name="downlinkVpcs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.downlinkVpcs"></a>

```typescript
public readonly downlinkVpcs: DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList">DataOpentelekomcloudPrivateNatGatewayV3GatewaysDownlinkVpcsList</a>

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `ruleMax`<sup>Required</sup> <a name="ruleMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.ruleMax"></a>

```typescript
public readonly ruleMax: number;
```

- *Type:* number

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.spec"></a>

```typescript
public readonly spec: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `transitIpPoolSizeMax`<sup>Required</sup> <a name="transitIpPoolSizeMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.transitIpPoolSizeMax"></a>

```typescript
public readonly transitIpPoolSizeMax: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3GatewaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudPrivateNatGatewayV3Gateways;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatGatewayV3.DataOpentelekomcloudPrivateNatGatewayV3Gateways">DataOpentelekomcloudPrivateNatGatewayV3Gateways</a>

---



