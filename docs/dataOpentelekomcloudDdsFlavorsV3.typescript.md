# `data_opentelekomcloud_dds_flavors_v3`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_dds_flavors_v3`](https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3).

# `dataOpentelekomcloudDdsFlavorsV3` Submodule <a name="`dataOpentelekomcloudDdsFlavorsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDdsFlavorsV3 <a name="DataOpentelekomcloudDdsFlavorsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3 opentelekomcloud_dds_flavors_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3(scope: Construct, id: string, config: DataOpentelekomcloudDdsFlavorsV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config">DataOpentelekomcloudDdsFlavorsV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config">DataOpentelekomcloudDdsFlavorsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetVcpus">resetVcpus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVcpus` <a name="resetVcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.resetVcpus"></a>

```typescript
public resetVcpus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.flavors">flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList">DataOpentelekomcloudDdsFlavorsV3FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.engineNameInput">engineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.vcpusInput">vcpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.engineName">engineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.vcpus">vcpus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `flavors`<sup>Required</sup> <a name="flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.flavors"></a>

```typescript
public readonly flavors: DataOpentelekomcloudDdsFlavorsV3FlavorsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList">DataOpentelekomcloudDdsFlavorsV3FlavorsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.engineNameInput"></a>

```typescript
public readonly engineNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.vcpusInput"></a>

```typescript
public readonly vcpusInput: string;
```

- *Type:* string

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.vcpus"></a>

```typescript
public readonly vcpus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDdsFlavorsV3Config <a name="DataOpentelekomcloudDdsFlavorsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudDdsFlavorsV3Config: dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.engineName">engineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#engine_name DataOpentelekomcloudDdsFlavorsV3#engine_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#id DataOpentelekomcloudDdsFlavorsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#memory DataOpentelekomcloudDdsFlavorsV3#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#type DataOpentelekomcloudDdsFlavorsV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.vcpus">vcpus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#vcpus DataOpentelekomcloudDdsFlavorsV3#vcpus}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#engine_name DataOpentelekomcloudDdsFlavorsV3#engine_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#id DataOpentelekomcloudDdsFlavorsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#memory DataOpentelekomcloudDdsFlavorsV3#memory}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#type DataOpentelekomcloudDdsFlavorsV3#type}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Config.property.vcpus"></a>

```typescript
public readonly vcpus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dds_flavors_v3#vcpus DataOpentelekomcloudDdsFlavorsV3#vcpus}.

---

### DataOpentelekomcloudDdsFlavorsV3Flavors <a name="DataOpentelekomcloudDdsFlavorsV3Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Flavors.Initializer"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudDdsFlavorsV3Flavors: dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Flavors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDdsFlavorsV3FlavorsList <a name="DataOpentelekomcloudDdsFlavorsV3FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference <a name="DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudDdsFlavorsV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.azStatus">azStatus</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.specCode">specCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.vcpus">vcpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Flavors">DataOpentelekomcloudDdsFlavorsV3Flavors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azStatus`<sup>Required</sup> <a name="azStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.azStatus"></a>

```typescript
public readonly azStatus: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `specCode`<sup>Required</sup> <a name="specCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.specCode"></a>

```typescript
public readonly specCode: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.vcpus"></a>

```typescript
public readonly vcpus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3FlavorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudDdsFlavorsV3Flavors;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDdsFlavorsV3.DataOpentelekomcloudDdsFlavorsV3Flavors">DataOpentelekomcloudDdsFlavorsV3Flavors</a>

---



