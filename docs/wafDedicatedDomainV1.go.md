# `wafDedicatedDomainV1` Submodule <a name="`wafDedicatedDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedDomainV1 <a name="WafDedicatedDomainV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1 opentelekomcloud_waf_dedicated_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.NewWafDedicatedDomainV1(scope Construct, id *string, config WafDedicatedDomainV1Config) WafDedicatedDomainV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config">WafDedicatedDomainV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config">WafDedicatedDomainV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer">PutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig">PutTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCipher">ResetCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetKeepPolicy">ResetKeepPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPci3Ds">ResetPci3Ds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPciDss">ResetPciDss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTimeoutConfig">ResetTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServer` <a name="PutServer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer"></a>

```go
func PutServer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putServer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeoutConfig` <a name="PutTimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig"></a>

```go
func PutTimeoutConfig(value WafDedicatedDomainV1TimeoutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetCipher` <a name="ResetCipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetCipher"></a>

```go
func ResetCipher()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetId"></a>

```go
func ResetId()
```

##### `ResetKeepPolicy` <a name="ResetKeepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetKeepPolicy"></a>

```go
func ResetKeepPolicy()
```

##### `ResetPci3Ds` <a name="ResetPci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPci3Ds"></a>

```go
func ResetPci3Ds()
```

##### `ResetPciDss` <a name="ResetPciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPciDss"></a>

```go
func ResetPciDss()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProtectStatus"></a>

```go
func ResetProtectStatus()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeoutConfig` <a name="ResetTimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTimeoutConfig"></a>

```go
func ResetTimeoutConfig()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.resetTls"></a>

```go
func ResetTls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.WafDedicatedDomainV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.WafDedicatedDomainV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.WafDedicatedDomainV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.WafDedicatedDomainV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WafDedicatedDomainV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WafDedicatedDomainV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WafDedicatedDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.accessStatus">AccessStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.alarmPage">AlarmPage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.complianceCertification">ComplianceCertification</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.server">Server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList">WafDedicatedDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference">WafDedicatedDomainV1TimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.trafficIdentifier">TrafficIdentifier</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipherInput">CipherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicyInput">KeepPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3DsInput">Pci3DsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDssInput">PciDssInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatusInput">ProtectStatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxyInput">ProxyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.serverInput">ServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfigInput">TimeoutConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tlsInput">TlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipher">Cipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicy">KeepPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3Ds">Pci3Ds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDss">PciDss</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatus">ProtectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxy">Proxy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tls">Tls</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessStatus`<sup>Required</sup> <a name="AccessStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.accessStatus"></a>

```go
func AccessStatus() *f64
```

- *Type:* *f64

---

##### `AlarmPage`<sup>Required</sup> <a name="AlarmPage" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.alarmPage"></a>

```go
func AlarmPage() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `ComplianceCertification`<sup>Required</sup> <a name="ComplianceCertification" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.complianceCertification"></a>

```go
func ComplianceCertification() BooleanMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.server"></a>

```go
func Server() WafDedicatedDomainV1ServerList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList">WafDedicatedDomainV1ServerList</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfig"></a>

```go
func TimeoutConfig() WafDedicatedDomainV1TimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference">WafDedicatedDomainV1TimeoutConfigOutputReference</a>

---

##### `TrafficIdentifier`<sup>Required</sup> <a name="TrafficIdentifier" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.trafficIdentifier"></a>

```go
func TrafficIdentifier() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `CipherInput`<sup>Optional</sup> <a name="CipherInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipherInput"></a>

```go
func CipherInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeepPolicyInput`<sup>Optional</sup> <a name="KeepPolicyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicyInput"></a>

```go
func KeepPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `Pci3DsInput`<sup>Optional</sup> <a name="Pci3DsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3DsInput"></a>

```go
func Pci3DsInput() interface{}
```

- *Type:* interface{}

---

##### `PciDssInput`<sup>Optional</sup> <a name="PciDssInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDssInput"></a>

```go
func PciDssInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatusInput"></a>

```go
func ProtectStatusInput() *f64
```

- *Type:* *f64

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxyInput"></a>

```go
func ProxyInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.serverInput"></a>

```go
func ServerInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutConfigInput`<sup>Optional</sup> <a name="TimeoutConfigInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.timeoutConfigInput"></a>

```go
func TimeoutConfigInput() WafDedicatedDomainV1TimeoutConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tlsInput"></a>

```go
func TlsInput() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `Cipher`<sup>Required</sup> <a name="Cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.cipher"></a>

```go
func Cipher() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeepPolicy`<sup>Required</sup> <a name="KeepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.keepPolicy"></a>

```go
func KeepPolicy() interface{}
```

- *Type:* interface{}

---

##### `Pci3Ds`<sup>Required</sup> <a name="Pci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pci3Ds"></a>

```go
func Pci3Ds() interface{}
```

- *Type:* interface{}

---

##### `PciDss`<sup>Required</sup> <a name="PciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.pciDss"></a>

```go
func PciDss() interface{}
```

- *Type:* interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.protectStatus"></a>

```go
func ProtectStatus() *f64
```

- *Type:* *f64

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.proxy"></a>

```go
func Proxy() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tls"></a>

```go
func Tls() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedDomainV1Config <a name="WafDedicatedDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

&wafdedicateddomainv1.WafDedicatedDomainV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Server: interface{},
	CertificateId: *string,
	Cipher: *string,
	Id: *string,
	KeepPolicy: interface{},
	Pci3Ds: interface{},
	PciDss: interface{},
	PolicyId: *string,
	ProtectStatus: *f64,
	Proxy: interface{},
	Region: *string,
	TimeoutConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig,
	Tls: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.server">Server</a></code> | <code>interface{}</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.cipher">Cipher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.keepPolicy">KeepPolicy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pci3Ds">Pci3Ds</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pciDss">PciDss</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.protectStatus">ProtectStatus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.proxy">Proxy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | timeout_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.tls">Tls</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#domain WafDedicatedDomainV1#domain}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.server"></a>

```go
Server interface{}
```

- *Type:* interface{}

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#server WafDedicatedDomainV1#server}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#certificate_id WafDedicatedDomainV1#certificate_id}.

---

##### `Cipher`<sup>Optional</sup> <a name="Cipher" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.cipher"></a>

```go
Cipher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#cipher WafDedicatedDomainV1#cipher}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#id WafDedicatedDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeepPolicy`<sup>Optional</sup> <a name="KeepPolicy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.keepPolicy"></a>

```go
KeepPolicy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#keep_policy WafDedicatedDomainV1#keep_policy}.

---

##### `Pci3Ds`<sup>Optional</sup> <a name="Pci3Ds" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pci3Ds"></a>

```go
Pci3Ds interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#pci_3ds WafDedicatedDomainV1#pci_3ds}.

---

##### `PciDss`<sup>Optional</sup> <a name="PciDss" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.pciDss"></a>

```go
PciDss interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#pci_dss WafDedicatedDomainV1#pci_dss}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#policy_id WafDedicatedDomainV1#policy_id}.

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.protectStatus"></a>

```go
ProtectStatus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#protect_status WafDedicatedDomainV1#protect_status}.

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.proxy"></a>

```go
Proxy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#proxy WafDedicatedDomainV1#proxy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#region WafDedicatedDomainV1#region}.

---

##### `TimeoutConfig`<sup>Optional</sup> <a name="TimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.timeoutConfig"></a>

```go
TimeoutConfig WafDedicatedDomainV1TimeoutConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

timeout_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#timeout_config WafDedicatedDomainV1#timeout_config}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Config.property.tls"></a>

```go
Tls *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#tls WafDedicatedDomainV1#tls}.

---

### WafDedicatedDomainV1Server <a name="WafDedicatedDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

&wafdedicateddomainv1.WafDedicatedDomainV1Server {
	Address: *string,
	ClientProtocol: *string,
	Port: *f64,
	ServerProtocol: *string,
	Type: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#address WafDedicatedDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.clientProtocol">ClientProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#client_protocol WafDedicatedDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#port WafDedicatedDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.serverProtocol">ServerProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#server_protocol WafDedicatedDomainV1#server_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#type WafDedicatedDomainV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#vpc_id WafDedicatedDomainV1#vpc_id}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#address WafDedicatedDomainV1#address}.

---

##### `ClientProtocol`<sup>Required</sup> <a name="ClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.clientProtocol"></a>

```go
ClientProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#client_protocol WafDedicatedDomainV1#client_protocol}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#port WafDedicatedDomainV1#port}.

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.serverProtocol"></a>

```go
ServerProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#server_protocol WafDedicatedDomainV1#server_protocol}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#type WafDedicatedDomainV1#type}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1Server.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#vpc_id WafDedicatedDomainV1#vpc_id}.

---

### WafDedicatedDomainV1TimeoutConfig <a name="WafDedicatedDomainV1TimeoutConfig" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

&wafdedicateddomainv1.WafDedicatedDomainV1TimeoutConfig {
	ConnectTimeout: *f64,
	ReadTimeout: *f64,
	SendTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.readTimeout">ReadTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.sendTimeout">SendTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.connectTimeout"></a>

```go
ConnectTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#connect_timeout WafDedicatedDomainV1#connect_timeout}.

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.readTimeout"></a>

```go
ReadTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#read_timeout WafDedicatedDomainV1#read_timeout}.

---

##### `SendTimeout`<sup>Optional</sup> <a name="SendTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig.property.sendTimeout"></a>

```go
SendTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.12/docs/resources/waf_dedicated_domain_v1#send_timeout WafDedicatedDomainV1#send_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedDomainV1ServerList <a name="WafDedicatedDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.NewWafDedicatedDomainV1ServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafDedicatedDomainV1ServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get"></a>

```go
func Get(index *f64) WafDedicatedDomainV1ServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedDomainV1ServerOutputReference <a name="WafDedicatedDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.NewWafDedicatedDomainV1ServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafDedicatedDomainV1ServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocolInput">ClientProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocolInput">ServerProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocol">ClientProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocol">ServerProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `ClientProtocolInput`<sup>Optional</sup> <a name="ClientProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```go
func ClientProtocolInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerProtocolInput`<sup>Optional</sup> <a name="ServerProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```go
func ServerProtocolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `ClientProtocol`<sup>Required</sup> <a name="ClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.clientProtocol"></a>

```go
func ClientProtocol() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.serverProtocol"></a>

```go
func ServerProtocol() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1ServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafDedicatedDomainV1TimeoutConfigOutputReference <a name="WafDedicatedDomainV1TimeoutConfigOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/wafdedicateddomainv1"

wafdedicateddomainv1.NewWafDedicatedDomainV1TimeoutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafDedicatedDomainV1TimeoutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetSendTimeout">ResetSendTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetReadTimeout"></a>

```go
func ResetReadTimeout()
```

##### `ResetSendTimeout` <a name="ResetSendTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.resetSendTimeout"></a>

```go
func ResetSendTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeoutInput">SendTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeout">ReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeout">SendTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeoutInput"></a>

```go
func ReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SendTimeoutInput`<sup>Optional</sup> <a name="SendTimeoutInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeoutInput"></a>

```go
func SendTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.readTimeout"></a>

```go
func ReadTimeout() *f64
```

- *Type:* *f64

---

##### `SendTimeout`<sup>Required</sup> <a name="SendTimeout" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.sendTimeout"></a>

```go
func SendTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WafDedicatedDomainV1TimeoutConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedDomainV1.WafDedicatedDomainV1TimeoutConfig">WafDedicatedDomainV1TimeoutConfig</a>

---



