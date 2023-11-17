# `opentelekomcloud_dc_virtual_interface_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dc_virtual_interface_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2).

# `dcVirtualInterfaceV2` Submodule <a name="`dcVirtualInterfaceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfaceV2 <a name="DcVirtualInterfaceV2" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2 opentelekomcloud_dc_virtual_interface_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer"></a>

```typescript
import { dcVirtualInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualInterfaceV2.DcVirtualInterfaceV2(scope: Construct, id: string, config: DcVirtualInterfaceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config">DcVirtualInterfaceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config">DcVirtualInterfaceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5">resetBgpMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd">resetEnableBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa">resetEnableNqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId">resetLagId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip">resetLocalGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip">resetRemoteGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetServiceType">resetServiceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn"></a>

```typescript
public resetAsn(): void
```

##### `resetBgpMd5` <a name="resetBgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5"></a>

```typescript
public resetBgpMd5(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableBfd` <a name="resetEnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd"></a>

```typescript
public resetEnableBfd(): void
```

##### `resetEnableNqa` <a name="resetEnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa"></a>

```typescript
public resetEnableNqa(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLagId` <a name="resetLagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId"></a>

```typescript
public resetLagId(): void
```

##### `resetLocalGatewayV4Ip` <a name="resetLocalGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip"></a>

```typescript
public resetLocalGatewayV4Ip(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRemoteGatewayV4Ip` <a name="resetRemoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip"></a>

```typescript
public resetRemoteGatewayV4Ip(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct"></a>

```typescript
import { dcVirtualInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement"></a>

```typescript
import { dcVirtualInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource"></a>

```typescript
import { dcVirtualInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport"></a>

```typescript
import { dcVirtualInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualInterfaceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualInterfaceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfaceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput">bandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input">bgpMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput">directConnectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput">enableBfdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput">enableNqaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput">lagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput">localGatewayV4IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupIdInput">remoteEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput">remoteGatewayV4IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput">routeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput">virtualGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId">directConnectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd">enableBfd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa">enableNqa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId">lagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId">remoteEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode">routeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId">virtualGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: number;
```

- *Type:* number

---

##### `bgpMd5Input`<sup>Optional</sup> <a name="bgpMd5Input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input"></a>

```typescript
public readonly bgpMd5Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directConnectIdInput`<sup>Optional</sup> <a name="directConnectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput"></a>

```typescript
public readonly directConnectIdInput: string;
```

- *Type:* string

---

##### `enableBfdInput`<sup>Optional</sup> <a name="enableBfdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput"></a>

```typescript
public readonly enableBfdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNqaInput`<sup>Optional</sup> <a name="enableNqaInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput"></a>

```typescript
public readonly enableNqaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lagIdInput`<sup>Optional</sup> <a name="lagIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput"></a>

```typescript
public readonly lagIdInput: string;
```

- *Type:* string

---

##### `localGatewayV4IpInput`<sup>Optional</sup> <a name="localGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput"></a>

```typescript
public readonly localGatewayV4IpInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `remoteEpGroupIdInput`<sup>Optional</sup> <a name="remoteEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupIdInput"></a>

```typescript
public readonly remoteEpGroupIdInput: string;
```

- *Type:* string

---

##### `remoteGatewayV4IpInput`<sup>Optional</sup> <a name="remoteGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput"></a>

```typescript
public readonly remoteGatewayV4IpInput: string;
```

- *Type:* string

---

##### `routeModeInput`<sup>Optional</sup> <a name="routeModeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput"></a>

```typescript
public readonly routeModeInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `virtualGatewayIdInput`<sup>Optional</sup> <a name="virtualGatewayIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput"></a>

```typescript
public readonly virtualGatewayIdInput: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `bgpMd5`<sup>Required</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId"></a>

```typescript
public readonly directConnectId: string;
```

- *Type:* string

---

##### `enableBfd`<sup>Required</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd"></a>

```typescript
public readonly enableBfd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNqa`<sup>Required</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa"></a>

```typescript
public readonly enableNqa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

---

##### `localGatewayV4Ip`<sup>Required</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip"></a>

```typescript
public readonly localGatewayV4Ip: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `remoteEpGroupId`<sup>Required</sup> <a name="remoteEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId"></a>

```typescript
public readonly remoteEpGroupId: string;
```

- *Type:* string

---

##### `remoteGatewayV4Ip`<sup>Required</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip"></a>

```typescript
public readonly remoteGatewayV4Ip: string;
```

- *Type:* string

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId"></a>

```typescript
public readonly virtualGatewayId: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfaceV2Config <a name="DcVirtualInterfaceV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.Initializer"></a>

```typescript
import { dcVirtualInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualInterfaceV2Config: dcVirtualInterfaceV2.DcVirtualInterfaceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth">bandwidth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId">directConnectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroupId">remoteEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode">routeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId">virtualGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd">enableBfd</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa">enableNqa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId">lagId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}.

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId"></a>

```typescript
public readonly directConnectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `remoteEpGroupId`<sup>Required</sup> <a name="remoteEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroupId"></a>

```typescript
public readonly remoteEpGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}.

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId"></a>

```typescript
public readonly virtualGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}.

---

##### `bgpMd5`<sup>Optional</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `enableBfd`<sup>Optional</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd"></a>

```typescript
public readonly enableBfd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}.

---

##### `enableNqa`<sup>Optional</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa"></a>

```typescript
public readonly enableNqa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lagId`<sup>Optional</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}.

---

##### `localGatewayV4Ip`<sup>Optional</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip"></a>

```typescript
public readonly localGatewayV4Ip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `remoteGatewayV4Ip`<sup>Optional</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip"></a>

```typescript
public readonly remoteGatewayV4Ip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}.

---



