# `data_opentelekomcloud_identity_project_v3`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_identity_project_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3).

# `dataOpentelekomcloudIdentityProjectV3` Submodule <a name="`dataOpentelekomcloudIdentityProjectV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudIdentityProjectV3 <a name="DataOpentelekomcloudIdentityProjectV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3 opentelekomcloud_identity_project_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudIdentityProjectV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3(scope: Construct, id: string, config?: DataOpentelekomcloudIdentityProjectV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config">DataOpentelekomcloudIdentityProjectV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config">DataOpentelekomcloudIdentityProjectV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetIsDomain">resetIsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetParentId">resetParentId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomainId` <a name="resetDomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDomain` <a name="resetIsDomain" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetIsDomain"></a>

```typescript
public resetIsDomain(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.resetParentId"></a>

```typescript
public resetParentId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudIdentityProjectV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudIdentityProjectV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudIdentityProjectV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.isDomainInput">isDomainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.isDomain">isDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDomainInput`<sup>Optional</sup> <a name="isDomainInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.isDomainInput"></a>

```typescript
public readonly isDomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDomain`<sup>Required</sup> <a name="isDomain" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.isDomain"></a>

```typescript
public readonly isDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudIdentityProjectV3Config <a name="DataOpentelekomcloudIdentityProjectV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudIdentityProjectV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudIdentityProjectV3Config: dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#domain_id DataOpentelekomcloudIdentityProjectV3#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#enabled DataOpentelekomcloudIdentityProjectV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#id DataOpentelekomcloudIdentityProjectV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.isDomain">isDomain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#is_domain DataOpentelekomcloudIdentityProjectV3#is_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#name DataOpentelekomcloudIdentityProjectV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#parent_id DataOpentelekomcloudIdentityProjectV3#parent_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#domain_id DataOpentelekomcloudIdentityProjectV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#enabled DataOpentelekomcloudIdentityProjectV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#id DataOpentelekomcloudIdentityProjectV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDomain`<sup>Optional</sup> <a name="isDomain" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.isDomain"></a>

```typescript
public readonly isDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#is_domain DataOpentelekomcloudIdentityProjectV3#is_domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#name DataOpentelekomcloudIdentityProjectV3#name}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityProjectV3.DataOpentelekomcloudIdentityProjectV3Config.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/data-sources/identity_project_v3#parent_id DataOpentelekomcloudIdentityProjectV3#parent_id}.

---



