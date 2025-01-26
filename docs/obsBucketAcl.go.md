# `obsBucketAcl` Submodule <a name="`obsBucketAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketAcl <a name="ObsBucketAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl opentelekomcloud_obs_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.NewObsBucketAcl(scope Construct, id *string, config ObsBucketAclConfig) ObsBucketAcl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig">ObsBucketAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig">ObsBucketAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission">PutAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission">PutLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission">PutOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission">PutPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission">ResetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission">ResetLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission">ResetOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission">ResetPublicPermission</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountPermission` <a name="PutAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission"></a>

```go
func PutAccountPermission(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogDeliveryUserPermission` <a name="PutLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission"></a>

```go
func PutLogDeliveryUserPermission(value ObsBucketAclLogDeliveryUserPermission)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `PutOwnerPermission` <a name="PutOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission"></a>

```go
func PutOwnerPermission(value ObsBucketAclOwnerPermission)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `PutPublicPermission` <a name="PutPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission"></a>

```go
func PutPublicPermission(value ObsBucketAclPublicPermission)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `ResetAccountPermission` <a name="ResetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission"></a>

```go
func ResetAccountPermission()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId"></a>

```go
func ResetId()
```

##### `ResetLogDeliveryUserPermission` <a name="ResetLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission"></a>

```go
func ResetLogDeliveryUserPermission()
```

##### `ResetOwnerPermission` <a name="ResetOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission"></a>

```go
func ResetOwnerPermission()
```

##### `ResetPublicPermission` <a name="ResetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission"></a>

```go
func ResetPublicPermission()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.ObsBucketAcl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.ObsBucketAcl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.ObsBucketAcl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.ObsBucketAcl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObsBucketAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObsBucketAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission">AccountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission">LogDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission">OwnerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput">AccountPermissionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput">LogDeliveryUserPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput">OwnerPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput">PublicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountPermission`<sup>Required</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission"></a>

```go
func AccountPermission() ObsBucketAclAccountPermissionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a>

---

##### `LogDeliveryUserPermission`<sup>Required</sup> <a name="LogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission"></a>

```go
func LogDeliveryUserPermission() ObsBucketAclLogDeliveryUserPermissionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a>

---

##### `OwnerPermission`<sup>Required</sup> <a name="OwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission"></a>

```go
func OwnerPermission() ObsBucketAclOwnerPermissionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a>

---

##### `PublicPermission`<sup>Required</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission"></a>

```go
func PublicPermission() ObsBucketAclPublicPermissionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `AccountPermissionInput`<sup>Optional</sup> <a name="AccountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput"></a>

```go
func AccountPermissionInput() interface{}
```

- *Type:* interface{}

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogDeliveryUserPermissionInput`<sup>Optional</sup> <a name="LogDeliveryUserPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput"></a>

```go
func LogDeliveryUserPermissionInput() ObsBucketAclLogDeliveryUserPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `OwnerPermissionInput`<sup>Optional</sup> <a name="OwnerPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput"></a>

```go
func OwnerPermissionInput() ObsBucketAclOwnerPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `PublicPermissionInput`<sup>Optional</sup> <a name="PublicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput"></a>

```go
func PublicPermissionInput() ObsBucketAclPublicPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketAclAccountPermission <a name="ObsBucketAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

&obsbucketacl.ObsBucketAclAccountPermission {
	AccountId: *string,
	AccessToAcl: *[]*string,
	AccessToBucket: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}.

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl"></a>

```go
AccessToAcl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket"></a>

```go
AccessToBucket *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclConfig <a name="ObsBucketAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

&obsbucketacl.ObsBucketAclConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	AccountPermission: interface{},
	Id: *string,
	LogDeliveryUserPermission: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission,
	OwnerPermission: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission,
	PublicPermission: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission">AccountPermission</a></code> | <code>interface{}</code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission">LogDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | log_delivery_user_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission">OwnerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | owner_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | public_permission block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}.

---

##### `AccountPermission`<sup>Optional</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission"></a>

```go
AccountPermission interface{}
```

- *Type:* interface{}

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#account_permission ObsBucketAcl#account_permission}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogDeliveryUserPermission`<sup>Optional</sup> <a name="LogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission"></a>

```go
LogDeliveryUserPermission ObsBucketAclLogDeliveryUserPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

log_delivery_user_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#log_delivery_user_permission ObsBucketAcl#log_delivery_user_permission}

---

##### `OwnerPermission`<sup>Optional</sup> <a name="OwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission"></a>

```go
OwnerPermission ObsBucketAclOwnerPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

owner_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#owner_permission ObsBucketAcl#owner_permission}

---

##### `PublicPermission`<sup>Optional</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission"></a>

```go
PublicPermission ObsBucketAclPublicPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#public_permission ObsBucketAcl#public_permission}

---

### ObsBucketAclLogDeliveryUserPermission <a name="ObsBucketAclLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

&obsbucketacl.ObsBucketAclLogDeliveryUserPermission {
	AccessToAcl: *[]*string,
	AccessToBucket: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl"></a>

```go
AccessToAcl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket"></a>

```go
AccessToBucket *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclOwnerPermission <a name="ObsBucketAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

&obsbucketacl.ObsBucketAclOwnerPermission {
	AccessToAcl: *[]*string,
	AccessToBucket: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl"></a>

```go
AccessToAcl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket"></a>

```go
AccessToBucket *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclPublicPermission <a name="ObsBucketAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

&obsbucketacl.ObsBucketAclPublicPermission {
	AccessToAcl: *[]*string,
	AccessToBucket: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl"></a>

```go
AccessToAcl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket"></a>

```go
AccessToBucket *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketAclAccountPermissionList <a name="ObsBucketAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.NewObsBucketAclAccountPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObsBucketAclAccountPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get"></a>

```go
func Get(index *f64) ObsBucketAclAccountPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObsBucketAclAccountPermissionOutputReference <a name="ObsBucketAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.NewObsBucketAclAccountPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObsBucketAclAccountPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```go
func ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket"></a>

```go
func ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```go
func AccessToAclInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput"></a>

```go
func AccessToBucketInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket"></a>

```go
func AccessToBucket() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObsBucketAclLogDeliveryUserPermissionOutputReference <a name="ObsBucketAclLogDeliveryUserPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.NewObsBucketAclLogDeliveryUserPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObsBucketAclLogDeliveryUserPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl"></a>

```go
func ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket"></a>

```go
func ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput"></a>

```go
func AccessToAclInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput"></a>

```go
func AccessToBucketInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket"></a>

```go
func AccessToBucket() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() ObsBucketAclLogDeliveryUserPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---


### ObsBucketAclOwnerPermissionOutputReference <a name="ObsBucketAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.NewObsBucketAclOwnerPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObsBucketAclOwnerPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl"></a>

```go
func ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket"></a>

```go
func ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput"></a>

```go
func AccessToAclInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput"></a>

```go
func AccessToBucketInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket"></a>

```go
func AccessToBucket() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() ObsBucketAclOwnerPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---


### ObsBucketAclPublicPermissionOutputReference <a name="ObsBucketAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketacl"

obsbucketacl.NewObsBucketAclPublicPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObsBucketAclPublicPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```go
func ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket"></a>

```go
func ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```go
func AccessToAclInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput"></a>

```go
func AccessToBucketInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket"></a>

```go
func AccessToBucket() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() ObsBucketAclPublicPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---



