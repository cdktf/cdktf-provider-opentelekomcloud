# `identityProtocolV3` Submodule <a name="`identityProtocolV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityProtocolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityProtocolV3 <a name="IdentityProtocolV3" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3 opentelekomcloud_identity_protocol_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.NewIdentityProtocolV3(scope Construct, id *string, config IdentityProtocolV3Config) IdentityProtocolV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config">IdentityProtocolV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config">IdentityProtocolV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig"></a>

```go
func PutAccessConfig(value IdentityProtocolV3AccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata"></a>

```go
func PutMetadata(value IdentityProtocolV3Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetAccessConfig"></a>

```go
func ResetAccessConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetMetadata"></a>

```go
func ResetMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityProtocolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.IdentityProtocolV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.IdentityProtocolV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.IdentityProtocolV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.IdentityProtocolV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityProtocolV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityProtocolV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityProtocolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityProtocolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference">IdentityProtocolV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.links">Links</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference">IdentityProtocolV3MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingIdInput">MappingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingId">MappingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfig"></a>

```go
func AccessConfig() IdentityProtocolV3AccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference">IdentityProtocolV3AccessConfigOutputReference</a>

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.links"></a>

```go
func Links() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadata"></a>

```go
func Metadata() IdentityProtocolV3MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference">IdentityProtocolV3MetadataOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfigInput"></a>

```go
func AccessConfigInput() IdentityProtocolV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MappingIdInput`<sup>Optional</sup> <a name="MappingIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingIdInput"></a>

```go
func MappingIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadataInput"></a>

```go
func MetadataInput() IdentityProtocolV3Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MappingId`<sup>Required</sup> <a name="MappingId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingId"></a>

```go
func MappingId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityProtocolV3AccessConfig <a name="IdentityProtocolV3AccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

&identityprotocolv3.IdentityProtocolV3AccessConfig {
	AccessType: *string,
	ClientId: *string,
	ProviderUrl: *string,
	SigningKey: *string,
	AuthorizationEndpoint: *string,
	ResponseMode: *string,
	ResponseType: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.providerUrl">ProviderUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.signingKey">SigningKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseMode">ResponseMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseType">ResponseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}. |

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}.

---

##### `ProviderUrl`<sup>Required</sup> <a name="ProviderUrl" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.providerUrl"></a>

```go
ProviderUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}.

---

##### `SigningKey`<sup>Required</sup> <a name="SigningKey" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.signingKey"></a>

```go
SigningKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}.

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}.

---

##### `ResponseMode`<sup>Optional</sup> <a name="ResponseMode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseMode"></a>

```go
ResponseMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}.

---

##### `ResponseType`<sup>Optional</sup> <a name="ResponseType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseType"></a>

```go
ResponseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}.

---

### IdentityProtocolV3Config <a name="IdentityProtocolV3Config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

&identityprotocolv3.IdentityProtocolV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MappingId: *string,
	Protocol: *string,
	ProviderId: *string,
	AccessConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.identityProtocolV3.IdentityProtocolV3AccessConfig,
	Id: *string,
	Metadata: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.identityProtocolV3.IdentityProtocolV3Metadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.mappingId">MappingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.providerId">ProviderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MappingId`<sup>Required</sup> <a name="MappingId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.mappingId"></a>

```go
MappingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}.

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}.

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.accessConfig"></a>

```go
AccessConfig IdentityProtocolV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#access_config IdentityProtocolV3#access_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.metadata"></a>

```go
Metadata IdentityProtocolV3Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}

---

### IdentityProtocolV3Metadata <a name="IdentityProtocolV3Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

&identityprotocolv3.IdentityProtocolV3Metadata {
	DomainId: *string,
	Metadata: *string,
	XaccountType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.domainId">DomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.xaccountType">XaccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}. |

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}.

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}.

---

##### `XaccountType`<sup>Optional</sup> <a name="XaccountType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.xaccountType"></a>

```go
XaccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityProtocolV3AccessConfigOutputReference <a name="IdentityProtocolV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.NewIdentityProtocolV3AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityProtocolV3AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseMode">ResetResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseType">ResetResponseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetResponseMode` <a name="ResetResponseMode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseMode"></a>

```go
func ResetResponseMode()
```

##### `ResetResponseType` <a name="ResetResponseType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseType"></a>

```go
func ResetResponseType()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrlInput">ProviderUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseModeInput">ResponseModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseTypeInput">ResponseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKeyInput">SigningKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrl">ProviderUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseMode">ResponseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseType">ResponseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKey">SigningKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ProviderUrlInput`<sup>Optional</sup> <a name="ProviderUrlInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrlInput"></a>

```go
func ProviderUrlInput() *string
```

- *Type:* *string

---

##### `ResponseModeInput`<sup>Optional</sup> <a name="ResponseModeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseModeInput"></a>

```go
func ResponseModeInput() *string
```

- *Type:* *string

---

##### `ResponseTypeInput`<sup>Optional</sup> <a name="ResponseTypeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseTypeInput"></a>

```go
func ResponseTypeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SigningKeyInput`<sup>Optional</sup> <a name="SigningKeyInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKeyInput"></a>

```go
func SigningKeyInput() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ProviderUrl`<sup>Required</sup> <a name="ProviderUrl" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrl"></a>

```go
func ProviderUrl() *string
```

- *Type:* *string

---

##### `ResponseMode`<sup>Required</sup> <a name="ResponseMode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseMode"></a>

```go
func ResponseMode() *string
```

- *Type:* *string

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseType"></a>

```go
func ResponseType() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SigningKey`<sup>Required</sup> <a name="SigningKey" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKey"></a>

```go
func SigningKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityProtocolV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---


### IdentityProtocolV3MetadataOutputReference <a name="IdentityProtocolV3MetadataOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/identityprotocolv3"

identityprotocolv3.NewIdentityProtocolV3MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityProtocolV3MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resetXaccountType">ResetXaccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXaccountType` <a name="ResetXaccountType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resetXaccountType"></a>

```go
func ResetXaccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountTypeInput">XaccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountType">XaccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `XaccountTypeInput`<sup>Optional</sup> <a name="XaccountTypeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountTypeInput"></a>

```go
func XaccountTypeInput() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `XaccountType`<sup>Required</sup> <a name="XaccountType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountType"></a>

```go
func XaccountType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityProtocolV3Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---



