# `data_opentelekomcloud_images_image_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_images_image_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2).

# `dataOpentelekomcloudImagesImageV2` Submodule <a name="`dataOpentelekomcloudImagesImageV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudImagesImageV2 <a name="DataOpentelekomcloudImagesImageV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2 opentelekomcloud_images_image_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudImagesImageV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2(scope: Construct, id: string, config?: DataOpentelekomcloudImagesImageV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config">DataOpentelekomcloudImagesImageV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config">DataOpentelekomcloudImagesImageV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMax">resetSizeMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMin">resetSizeMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortDirection">resetSortDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortKey">resetSortKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSizeMax` <a name="resetSizeMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMax"></a>

```typescript
public resetSizeMax(): void
```

##### `resetSizeMin` <a name="resetSizeMin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSizeMin"></a>

```typescript
public resetSizeMin(): void
```

##### `resetSortDirection` <a name="resetSortDirection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortDirection"></a>

```typescript
public resetSortDirection(): void
```

##### `resetSortKey` <a name="resetSortKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetSortKey"></a>

```typescript
public resetSortKey(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudImagesImageV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudImagesImageV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudImagesImageV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.containerFormat">containerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.diskFormat">diskFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minDiskGb">minDiskGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minRamMb">minRamMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMaxInput">sizeMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMinInput">sizeMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirectionInput">sortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKeyInput">sortKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMax">sizeMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMin">sizeMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirection">sortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKey">sortKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `containerFormat`<sup>Required</sup> <a name="containerFormat" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.containerFormat"></a>

```typescript
public readonly containerFormat: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `diskFormat`<sup>Required</sup> <a name="diskFormat" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.diskFormat"></a>

```typescript
public readonly diskFormat: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `minDiskGb`<sup>Required</sup> <a name="minDiskGb" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minDiskGb"></a>

```typescript
public readonly minDiskGb: number;
```

- *Type:* number

---

##### `minRamMb`<sup>Required</sup> <a name="minRamMb" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.minRamMb"></a>

```typescript
public readonly minRamMb: number;
```

- *Type:* number

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.protected"></a>

```typescript
public readonly protected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeMaxInput`<sup>Optional</sup> <a name="sizeMaxInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMaxInput"></a>

```typescript
public readonly sizeMaxInput: number;
```

- *Type:* number

---

##### `sizeMinInput`<sup>Optional</sup> <a name="sizeMinInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMinInput"></a>

```typescript
public readonly sizeMinInput: number;
```

- *Type:* number

---

##### `sortDirectionInput`<sup>Optional</sup> <a name="sortDirectionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirectionInput"></a>

```typescript
public readonly sortDirectionInput: string;
```

- *Type:* string

---

##### `sortKeyInput`<sup>Optional</sup> <a name="sortKeyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKeyInput"></a>

```typescript
public readonly sortKeyInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sizeMax`<sup>Required</sup> <a name="sizeMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMax"></a>

```typescript
public readonly sizeMax: number;
```

- *Type:* number

---

##### `sizeMin`<sup>Required</sup> <a name="sizeMin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sizeMin"></a>

```typescript
public readonly sizeMin: number;
```

- *Type:* number

---

##### `sortDirection`<sup>Required</sup> <a name="sortDirection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudImagesImageV2Config <a name="DataOpentelekomcloudImagesImageV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudImagesImageV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudImagesImageV2Config: dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#id DataOpentelekomcloudImagesImageV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.nameRegex">nameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#properties DataOpentelekomcloudImagesImageV2#properties}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#region DataOpentelekomcloudImagesImageV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMax">sizeMax</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMin">sizeMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortDirection">sortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortKey">sortKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.visibility">visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#id DataOpentelekomcloudImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#most_recent DataOpentelekomcloudImagesImageV2#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#name DataOpentelekomcloudImagesImageV2#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#name_regex DataOpentelekomcloudImagesImageV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#owner DataOpentelekomcloudImagesImageV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#properties DataOpentelekomcloudImagesImageV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#region DataOpentelekomcloudImagesImageV2#region}.

---

##### `sizeMax`<sup>Optional</sup> <a name="sizeMax" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMax"></a>

```typescript
public readonly sizeMax: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#size_max DataOpentelekomcloudImagesImageV2#size_max}.

---

##### `sizeMin`<sup>Optional</sup> <a name="sizeMin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sizeMin"></a>

```typescript
public readonly sizeMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#size_min DataOpentelekomcloudImagesImageV2#size_min}.

---

##### `sortDirection`<sup>Optional</sup> <a name="sortDirection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#sort_direction DataOpentelekomcloudImagesImageV2#sort_direction}.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#sort_key DataOpentelekomcloudImagesImageV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#tag DataOpentelekomcloudImagesImageV2#tag}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudImagesImageV2.DataOpentelekomcloudImagesImageV2Config.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/data-sources/images_image_v2#visibility DataOpentelekomcloudImagesImageV2#visibility}.

---



