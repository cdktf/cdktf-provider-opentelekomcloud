# `dataOpentelekomcloudPrivateNatSnatRuleV3` Submodule <a name="`dataOpentelekomcloudPrivateNatSnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudPrivateNatSnatRuleV3 <a name="DataOpentelekomcloudPrivateNatSnatRuleV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/private_nat_snat_rule_v3 opentelekomcloud_private_nat_snat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3(scope: Construct, id: string, config?: DataOpentelekomcloudPrivateNatSnatRuleV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config">DataOpentelekomcloudPrivateNatSnatRuleV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config">DataOpentelekomcloudPrivateNatSnatRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudPrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudPrivateNatSnatRuleV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudPrivateNatSnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/private_nat_snat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudPrivateNatSnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.snatRules">snatRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `snatRules`<sup>Required</sup> <a name="snatRules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.snatRules"></a>

```typescript
public readonly snatRules: DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudPrivateNatSnatRuleV3Config <a name="DataOpentelekomcloudPrivateNatSnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatSnatRuleV3Config: dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/private_nat_snat_rule_v3#id DataOpentelekomcloudPrivateNatSnatRuleV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/data-sources/private_nat_snat_rule_v3#id DataOpentelekomcloudPrivateNatSnatRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatSnatRuleV3SnatRules: dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules = { ... }
```


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations: dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpAssociations">transitIpAssociations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpIds">transitIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.virsubnetId">virsubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `transitIpAssociations`<sup>Required</sup> <a name="transitIpAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpAssociations"></a>

```typescript
public readonly transitIpAssociations: DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList</a>

---

##### `transitIpIds`<sup>Required</sup> <a name="transitIpIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.transitIpIds"></a>

```typescript
public readonly transitIpIds: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `virsubnetId`<sup>Required</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.virsubnetId"></a>

```typescript
public readonly virsubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRules</a>

---


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference <a name="DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudPrivateNatSnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpAddress">transitIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpId">transitIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transitIpAddress`<sup>Required</sup> <a name="transitIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpAddress"></a>

```typescript
public readonly transitIpAddress: string;
```

- *Type:* string

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.transitIpId"></a>

```typescript
public readonly transitIpId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudPrivateNatSnatRuleV3.DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations">DataOpentelekomcloudPrivateNatSnatRuleV3SnatRulesTransitIpAssociations</a>

---



