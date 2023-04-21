# `opentelekomcloud_images_image_access_accept_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_images_image_access_accept_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2).

# `imagesImageAccessAcceptV2` Submodule <a name="`imagesImageAccessAcceptV2` Submodule" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagesImageAccessAcceptV2 <a name="ImagesImageAccessAcceptV2" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2 opentelekomcloud_images_image_access_accept_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer"></a>

```typescript
import { imagesImageAccessAcceptV2 } from '@cdktf/provider-opentelekomcloud'

new imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2(scope: Construct, id: string, config: ImagesImageAccessAcceptV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config">ImagesImageAccessAcceptV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config">ImagesImageAccessAcceptV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isConstruct"></a>

```typescript
import { imagesImageAccessAcceptV2 } from '@cdktf/provider-opentelekomcloud'

imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformElement"></a>

```typescript
import { imagesImageAccessAcceptV2 } from '@cdktf/provider-opentelekomcloud'

imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformResource"></a>

```typescript
import { imagesImageAccessAcceptV2 } from '@cdktf/provider-opentelekomcloud'

imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.memberIdInput">memberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.memberId">memberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.memberIdInput"></a>

```typescript
public readonly memberIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagesImageAccessAcceptV2Config <a name="ImagesImageAccessAcceptV2Config" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.Initializer"></a>

```typescript
import { imagesImageAccessAcceptV2 } from '@cdktf/provider-opentelekomcloud'

const imagesImageAccessAcceptV2Config: imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#image_id ImagesImageAccessAcceptV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.memberId">memberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#member_id ImagesImageAccessAcceptV2#member_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#status ImagesImageAccessAcceptV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#id ImagesImageAccessAcceptV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#image_id ImagesImageAccessAcceptV2#image_id}.

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#member_id ImagesImageAccessAcceptV2#member_id}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#status ImagesImageAccessAcceptV2#status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.imagesImageAccessAcceptV2.ImagesImageAccessAcceptV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/images_image_access_accept_v2#id ImagesImageAccessAcceptV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



